import style from "./subtleEdge.module.css";

const SubtleEdge = ({ flip = false }) => (
  <svg
    className={`${style.subtleEdge} ${flip ? style.flip : ""}`}
    viewBox="0 0 375 16"
    preserveAspectRatio="none"
  >
    <path d="M0,8 Q20,0 40,8 Q60,16 80,8 Q100,0 120,8 Q140,16 160,8 Q180,0 200,8 Q220,16 240,8 Q260,0 280,8 Q300,16 320,8 Q340,0 360,8 Q375,4 375,8 L375,16 L0,16 Z" />
  </svg>
);

export default SubtleEdge;

