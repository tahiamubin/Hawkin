import React from "react";

const SuccessStories = () => {
  return (
    <div>
      <section className="py-16 px-6" style={{ backgroundColor: "#EBF3EE" }}>
        <h2
          className="text-4xl font-bold text-center mb-4"
          style={{ color: "#1A1A1A" }}
        >
          Success Stories
        </h2>
        <p
          className="text-center mb-12 max-w-xl mx-auto"
          style={{ color: "#5A8F6E" }}
        >
          Real families, real love — hear from those who opened their hearts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            className="card shadow-md"
            style={{ backgroundColor: "#FBF8F3" }}
          >
            <div className="card-body">
              <p style={{ color: "#1A1A1A" }}>
                "Adopting Max was the best decision we ever made. He brought so
                much joy and energy into our home!"
              </p>
              <div className="divider" style={{ borderColor: "#C8714A" }}></div>
              <div className="flex items-center gap-3">
                <div className="avatar placeholder">
                  <div
                    className="rounded-full w-10"
                    style={{ backgroundColor: "#F0C4AE" }}
                  >
                    <span style={{ color: "#C8714A" }}>R</span>
                  </div>
                </div>
                <div>
                  <h2
                    className="card-title text-sm"
                    style={{ color: "#3D6B4F" }}
                  >
                    Rafi & Family
                  </h2>
                  <p className="text-xs" style={{ color: "#5A8F6E" }}>
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card shadow-md"
            style={{ backgroundColor: "#FBF8F3" }}
          >
            <div className="card-body">
              <p style={{ color: "#1A1A1A" }}>
                "Luna found us when we needed her most. She's not just a pet —
                she's family. We couldn't imagine life without her."
              </p>
              <div className="divider" style={{ borderColor: "#C8714A" }}></div>
              <div className="flex items-center gap-3">
                <div className="avatar placeholder">
                  <div
                    className="rounded-full w-10"
                    style={{ backgroundColor: "#F0C4AE" }}
                  >
                    <span style={{ color: "#C8714A" }}>S</span>
                  </div>
                </div>
                <div>
                  <h2
                    className="card-title text-sm"
                    style={{ color: "#3D6B4F" }}
                  >
                    Sadia & Ahmed
                  </h2>
                  <p className="text-xs" style={{ color: "#5A8F6E" }}>
                    Chittagong, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card shadow-md"
            style={{ backgroundColor: "#FBF8F3" }}
          >
            <div className="card-body">
              <p style={{ color: "#1A1A1A" }}>
                "Our kids grew up alongside Buddy. He taught them
                responsibility, empathy, and the meaning of true friendship."
              </p>
              <div className="divider" style={{ borderColor: "#C8714A" }}></div>
              <div className="flex items-center gap-3">
                <div className="avatar placeholder">
                  <div
                    className="rounded-full w-10"
                    style={{ backgroundColor: "#F0C4AE" }}
                  >
                    <span style={{ color: "#C8714A" }}>N</span>
                  </div>
                </div>
                <div>
                  <h2
                    className="card-title text-sm"
                    style={{ color: "#3D6B4F" }}
                  >
                    Nadia Islam
                  </h2>
                  <p className="text-xs" style={{ color: "#5A8F6E" }}>
                    Sylhet, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
