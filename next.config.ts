// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex", // ⛔ bunu silin və ya dəyişin
          },
        ],
      },
    ];
  },
};
