const video = document.querySelector(".player") as HTMLVideoElement;

video.volume;

// const opa = document.querySelector(".teste")!;

const opa = <HTMLVideoElement>document.querySelector(".teste");
const opa1 = document.querySelector<HTMLVideoElement>(".teste");
const opa2 = document.querySelector(".teste2");
