"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import type { CartItemType } from "@/lib/cart";

interface QuantityStepperProps {
  itemId: string;
  itemName: string;
  priceCents: number;
  itemType: CartItemType;
}

export function QuantityStepper({
  itemId,
  itemName,
  priceCents,
  itemType,
}: QuantityStepperProps) {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find((i) => i.id === itemId);
  const qty = cartItem?.quantity ?? 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ id: itemId, type: itemType, name: itemName, priceCents });
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateQuantity(itemId, qty + 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateQuantity(itemId, qty - 1);
  };

  return (
    <div className="flex items-center">
      <AnimatePresence mode="wait" initial={false}>
        {qty === 0 ? (
          <motion.button
            key="add"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={handleAdd}
            aria-label={`Add ${itemName}`}
            className="flex items-center justify-center rounded-sm transition-colors"
            style={{
              width: 32,
              height: 32,
              backgroundColor: "var(--color-daun)",
              color: "var(--color-rice)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </motion.button>
        ) : (
          <motion.div
            key="stepper"
            initial={{ width: 32, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 32, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-0 rounded-sm overflow-hidden"
            style={{
              border: "1.5px solid var(--color-daun)",
            }}
          >
            <button
              onClick={handleDecrement}
              aria-label={`Decrease ${itemName}`}
              className="flex items-center justify-center transition-colors"
              style={{
                width: 32,
                height: 30,
                backgroundColor: "transparent",
                color: "var(--color-daun)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <span
              className="flex items-center justify-center font-semibold"
              style={{
                minWidth: 28,
                height: 30,
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-body-sm)",
                color: "var(--color-kecap)",
                textAlign: "center",
              }}
            >
              {qty}
            </span>
            <button
              onClick={handleIncrement}
              aria-label={`Increase ${itemName}`}
              className="flex items-center justify-center transition-colors"
              style={{
                width: 32,
                height: 30,
                backgroundColor: "var(--color-daun)",
                color: "var(--color-rice)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
