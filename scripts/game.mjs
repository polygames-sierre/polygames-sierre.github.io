const hexagonZoomOut = {
    animation: [
        { transform: "scale(1)" },
        { transform: "scale(0)" }
    ],
    timing: {
        duration: 1000,
        iterations: 1
    }
};
let svg = document.querySelector("svg");
svg?.addEventListener("click", e => {
    let hexagon = e.target;
    hexagon.animate(hexagonZoomOut.animation, hexagonZoomOut.timing);
    //console.log(e);
    /*console.log(e);
    const animationElement = document.querySelector("animate");
animationElement.beginElement();
console.log("Animation has started.");*/
});
export {};
/*

    document.getElementById("tunnel").animate([
        { transform: 'translate3D(0, 0, 0)' },
        { transform: 'translate3D(0, -300px, 0)' }
      ], {
        duration: 1000,
        iterations: Infinity
      })
      
      var aliceTumbling = [
        { transform: 'rotate(0) translate3D(-50%, -50%, 0', color: '#000' },
        { color: '#431236', offset: 0.3},
        { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
      ];
      
      var aliceTiming = {
        duration: 3000,
        iterations: Infinity
      }
      
      document.getElementById("alice").animate(
        aliceTumbling,
        aliceTiming
      )*/
