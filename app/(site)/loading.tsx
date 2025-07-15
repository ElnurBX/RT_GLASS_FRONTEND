// app/loading.tsx
"use client";

export default function Loading() {
  return (
    <div className="loader-wrapper">
      <div className="spinner" />
      <style jsx>{`
        .loader-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #184D3E;
          height: 100vh;
        }

        .spinner {
          width: 48px;
          height: 48px;
          border: 5px solid white;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.9s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
