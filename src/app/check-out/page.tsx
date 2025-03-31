import Link from "next/link";
import React from "react";

export default function CheckoutPage() {
  return (
    <div className="justi flex h-screen flex-col items-center">
      <div className="flex flex-col">
        Thank You for the purchase.
        <Link href={"/"} className="btn-primary btn sm:w-[200px]">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
