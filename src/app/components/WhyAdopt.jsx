import React from "react";

const WhyAdopt = () => {
  return (
    <div>
      <section className="py-16 px-6" style={{ backgroundColor: "#FBF8F3" }}>
        <h2
          className="text-4xl font-bold text-center mb-4"
          style={{ color: "#1A1A1A" }}
        >
          Why Adopt a Pet?
        </h2>
        <p
          className="text-center mb-12 max-w-xl mx-auto"
          style={{ color: "#5A8F6E" }}
        >
          Give a loving animal a second chance and change your life forever.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            className="card shadow-md"
            style={{ backgroundColor: "#EBF3EE" }}
          >
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">🐾</div>
              <h2 className="card-title" style={{ color: "#3D6B4F" }}>
                Save a Life
              </h2>
              <p style={{ color: "#1A1A1A" }}>
                Millions of pets are waiting in shelters. Your adoption gives
                them a forever home and a new beginning.
              </p>
            </div>
          </div>

          <div
            className="card shadow-md"
            style={{ backgroundColor: "#EBF3EE" }}
          >
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">❤️</div>
              <h2 className="card-title" style={{ color: "#3D6B4F" }}>
                Unconditional Love
              </h2>
              <p style={{ color: "#1A1A1A" }}>
                Adopted pets form deep bonds with their owners, offering loyalty
                and companionship every single day.
              </p>
            </div>
          </div>

          <div
            className="card shadow-md"
            style={{ backgroundColor: "#EBF3EE" }}
          >
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">🏡</div>
              <h2 className="card-title" style={{ color: "#3D6B4F" }}>
                Reduce Overpopulation
              </h2>
              <p style={{ color: "#1A1A1A" }}>
                Adopting helps control shelter overcrowding and supports a more
                humane community for all animals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyAdopt;
