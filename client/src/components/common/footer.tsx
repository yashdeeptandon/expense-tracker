// src/components/specific/footer/Footer.tsx
export default function Footer() {
  return (
    <footer className="sticky bottom-0 h-8 w-full bg-gray-900 text-gray-300 p-4 text-center mt-auto flex items-center justify-between">
      <p className="w-full text-sm">
        © {new Date().getFullYear()} Expense Tracker. All rights reserved.
      </p>
    </footer>
  );
}
