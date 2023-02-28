import React from "react";
import { useEffect } from "react";
import { Link,useHistory } from "react-router-dom";

// components

import "./loading.css"
export default function Loading() {
    window.addEventListener("DOMContentLoaded", loading);
function loading() {
	var percents = [0.25, 0.5, 0.75, 1],
		step = 0,
		truckLoopDur = 10,
		fill = function () {
			let fillEl = document.querySelector(".progress-fill");
			fillEl.style.transform = "scaleY(" + percents[step] + ")";
			++step;

			if (step < percents.length) {
				setTimeout(fill, (truckLoopDur * 1e3) / 2);
			}
		};
	setTimeout(fill, (truckLoopDur * 1e3) / 4);
}

    const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
          history.push('/landing')
        }, 20000)
      }, [])
    return (
        
        <body class="bodypp">
            <div class="progress-container">
                <div class="progress-box">
                    <div class="progress-fill"></div>
                </div>
                <div class="progress-state state-load">
                <div class="wrapper two">
                    <div class="neon">
                        <h3>Loading...</h3>
                    </div>
                </div>
                </div>
                <div class="progress-state state-finish">
                <div class="wrapper two">
                    <div class="neon">
                        <h3>Complete!</h3>
                    </div>
                </div>
                </div>
            </div>
            <div class="dump-truck">
                <div class="front"></div>
                <div class="bucket"></div>
                <div class="dirt">
                    <div class="dirt-spill"></div>
                </div>
                <div class="base"></div>
                <div class="wheel wheel-front"></div>
                <div class="wheel wheel-middle"></div>
                <div class="wheel wheel-back"></div>
            </div>
            <div class="dump-truck">
                <div class="front"></div>
                <div class="bucket"></div>
                <div class="dirt">
                    <div class="dirt-spill"></div>
                </div>
                <div class="base"></div>
                <div class="wheel wheel-front"></div>
                <div class="wheel wheel-middle"></div>
                <div class="wheel wheel-back"></div>
            </div>
        </body>
    )
}