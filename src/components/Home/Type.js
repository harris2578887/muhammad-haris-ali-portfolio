import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                  "AI Engineer",
          "NLP Enthusiast",
          "LLM Fine-Tuning ",
          "Machine Learning ",
          "Python Developer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
