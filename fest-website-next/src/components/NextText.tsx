"use client";

const sto = () => {
  const deepDive = document.getElementById("deepdive");
  const topOffset = deepDive?.offsetTop || 0;
  window.scrollTo(0, topOffset - 50);
};

function NextText() {
  return (
    <a
      onClick={() => {
        sto();
      }}
      className="scroll-smooth cursor-pointer"
    >
      <h3
        className="absolute z-20 text-lg text-white uppercase tracking-widest md:bottom-10 bottom-5 md:right-12 right-2 bounce scroll-smooth"
        style={{ writingMode: "vertical-rl" }}
      >
        NEXT &gt;&gt;
      </h3>
    </a>
  );
}

export default NextText;
