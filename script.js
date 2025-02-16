gsap.to(".hero", {
    duration: 1.5,
    opacity: 1,
    y: -20,
    ease: "power3.out"
});

document.addEventListener("mousemove", (event) => {
    let x = (event.clientX / window.innerWidth - 0.5) * 30;
    let y = (event.clientY / window.innerHeight - 0.5) * 30;
    gsap.to(".container", {
        rotationY: x,
        rotationX: y,
        ease: "power2.out"
    });
});
