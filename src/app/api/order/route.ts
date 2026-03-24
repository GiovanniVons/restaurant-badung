import { NextResponse } from "next/server";

interface OrderItem {
  id: string;
  name: string;
  priceCents: number;
  quantity: number;
}

interface OrderRequest {
  items: OrderItem[];
  customer: {
    name: string;
    phone: string;
    email: string;
  };
  pickupSlot: {
    date: string;
    time: string;
  };
  notes?: string;
}

function generateOrderId(): string {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hex = Math.random().toString(16).slice(2, 6).toUpperCase();
  return `BDG-${yy}${mm}${dd}-${hex}`;
}

function validateOrder(body: OrderRequest): string | null {
  if (!body.items || body.items.length === 0) return "No items in order";
  for (const item of body.items) {
    if (!item.id || !item.name) return "Invalid item data";
    if (typeof item.priceCents !== "number" || item.priceCents <= 0) return "Invalid price";
    if (typeof item.quantity !== "number" || item.quantity < 1 || item.quantity > 99) return "Invalid quantity";
  }
  if (!body.customer?.name?.trim()) return "Name is required";
  if (!body.customer?.phone?.trim()) return "Phone is required";
  if (!body.customer?.email?.trim()) return "Email is required";
  if (!body.pickupSlot?.date || !body.pickupSlot?.time) return "Pickup time is required";
  return null;
}

export async function POST(request: Request) {
  try {
    const body: OrderRequest = await request.json();

    const validationError = validateOrder(body);
    if (validationError) {
      return NextResponse.json(
        { success: false, error: validationError },
        { status: 400 }
      );
    }

    const orderId = generateOrderId();
    const totalCents = body.items.reduce(
      (sum, item) => sum + item.priceCents * item.quantity,
      0
    );
    const totalFormatted = `\u20AC${(totalCents / 100).toFixed(2).replace(".", ",")}`;

    // Log the order (integration point for email notifications)
    console.log("\n\u2550\u2550\u2550 NEW TAKEAWAY ORDER \u2550\u2550\u2550");
    console.log(`Order:    ${orderId}`);
    console.log(`Customer: ${body.customer.name}`);
    console.log(`Phone:    ${body.customer.phone}`);
    console.log(`Email:    ${body.customer.email}`);
    console.log(`Pickup:   ${body.pickupSlot.date} at ${body.pickupSlot.time}`);
    console.log(`Items:`);
    for (const item of body.items) {
      const lineCents = item.priceCents * item.quantity;
      console.log(`  ${item.quantity}x ${item.name} -- \u20AC${(lineCents / 100).toFixed(2).replace(".", ",")}`);
    }
    console.log(`Total:    ${totalFormatted}`);
    if (body.notes) console.log(`Notes:    ${body.notes}`);
    console.log(`Payment:  Pay at pickup`);
    console.log("\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n");

    /* EMAIL_INTEGRATION_SLOT
     * Add nodemailer/resend here to notify the restaurant at info@restaurantbandung.nl
     * Send: orderId, items, customer info, pickup time, total, notes
     */

    /* MOLLIE_INTEGRATION_SLOT
     * When online payment is added:
     * 1. Create Mollie payment with totalCents, orderId, redirect URL
     * 2. Return { success: true, orderId, paymentUrl: mollie.getPaymentUrl() }
     * 3. Frontend redirects to Mollie hosted checkout
     * 4. Mollie webhook confirms payment -> update order status
     */

    return NextResponse.json({
      success: true,
      orderId,
      pickupTime: body.pickupSlot.time,
      pickupDate: body.pickupSlot.date,
    });
  } catch (error) {
    console.error("Order processing error:", error);
    return NextResponse.json(
      { success: false, error: "Order could not be processed" },
      { status: 500 }
    );
  }
}
