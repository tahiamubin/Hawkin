import React from "react";

const PetCare = () => {
  return (
    <div>
      <section className="py-16 px-6" style={{ backgroundColor: "#FBF8F3" }}>
        <h2
          className="text-4xl font-bold text-center mb-4"
          style={{ color: "#1A1A1A" }}
        >
          Pet Care Tips
        </h2>
        <p
          className="text-center mb-12 max-w-xl mx-auto"
          style={{ color: "#5A8F6E" }}
        >
          Keep your furry friends healthy, happy, and loved with these simple
          tips.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            className="card shadow-md"
            style={{ backgroundColor: "#EBF3EE" }}
          >
            <div className="card-body">
              <div className="text-3xl mb-1">🥗</div>
              <h2 className="card-title" style={{ color: "#3D6B4F" }}>
                Balanced Nutrition
              </h2>
              <p style={{ color: "#1A1A1A" }}>
                Feed your pet high-quality food suited to their species, age,
                and size. Fresh water should always be available.
              </p>
              <div className="card-actions justify-end mt-2">
                <span
                  className="badge"
                  style={{ backgroundColor: "#F0C4AE", color: "#C8714A" }}
                >
                  Nutrition
                </span>
              </div>
            </div>
          </div>

          <div
            className="card shadow-md"
            style={{ backgroundColor: "#EBF3EE" }}
          >
            <div className="card-body">
              <div className="text-3xl mb-1">🏃</div>
              <h2 className="card-title" style={{ color: "#3D6B4F" }}>
                Daily Exercise
              </h2>
              <p style={{ color: "#1A1A1A" }}>
                Regular walks and playtime keep pets physically fit and mentally
                stimulated. Even 20 minutes makes a big difference.
              </p>
              <div className="card-actions justify-end mt-2">
                <span
                  className="badge"
                  style={{ backgroundColor: "#F0C4AE", color: "#C8714A" }}
                >
                  Fitness
                </span>
              </div>
            </div>
          </div>

          <div
            className="card shadow-md"
            style={{ backgroundColor: "#EBF3EE" }}
          >
            <div className="card-body">
              <div className="text-3xl mb-1">🩺</div>
              <h2 className="card-title" style={{ color: "#3D6B4F" }}>
                Regular Vet Visits
              </h2>
              <p style={{ color: "#1A1A1A" }}>
                Schedule routine checkups and keep vaccinations up to date.
                Early detection saves lives and reduces long-term costs.
              </p>
              <div className="card-actions justify-end mt-2">
                <span
                  className="badge"
                  style={{ backgroundColor: "#F0C4AE", color: "#C8714A" }}
                >
                  Health
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PetCare;
