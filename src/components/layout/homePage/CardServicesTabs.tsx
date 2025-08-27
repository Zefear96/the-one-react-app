import { Collapse } from "antd";
import '../../../App.css';

const { Panel } = Collapse;

interface PropsCardServicesTabs {
  img: string;
  title: string;
  title2?: string | null;
  desc: string;
  desc2?: string | null;
  mode: "desktop" | "mobile";
  index: number;
}

export default function CardServicesTabs({ img, title, desc, title2, desc2, mode, index }: PropsCardServicesTabs) {
  if (mode === "desktop") {
    return (
      <div style={{
        display: "flex",
        flexDirection: "row",
        height: "420px",
        gap: "1.5rem",
        color: "white",
        flexShrink: "0",
        minWidth: "700px",
      }}>
        <img src={img} alt="" style={{
          objectFit: "cover",
          borderRadius: "1rem",
          maxWidth: "100%",
          verticalAlign: "center"
        }} />
        <div style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent:"space-around",
          gap: "1rem",
          minHeight: "420px",
          width: "360px"
        }}>
          <div style={{
            padding: "20px",
            border: "1px white solid",
            borderRadius: "1rem",
          }}>
            <div>
              <h3 style={{
                marginBottom: "0.5rem"
              }}>{title}</h3>
              <p>{desc}</p>
            </div>
            <div style={{ marginTop: "1rem", display: "flex", justifyContent: "end" }}>
              <div style={{
                borderRadius: "50%",
                backgroundColor: "#00F0D4",
                height: "1.75rem",
                width: "1.75rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black"
              }}>→</div>
            </div>
          </div>
          <div style={{
            padding: "20px",
            border: "1px white solid",
            borderRadius: "1rem",
          }}>
            <div>
              <h3 style={{
                marginBottom: "0.5rem"
              }}>{title2}</h3>
              <p>{desc2}</p>
            </div>
            <div style={{ marginTop: "1rem", display: "flex", justifyContent: "end" }}>
              <div style={{
                borderRadius: "50%",
                backgroundColor: "#00F0D4",
                height: "1.75rem",
                width: "1.75rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black"
              }}>→</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Panel header={title} key={index}>
      <img src={img} alt={title} className="rounded-xl mb-4" />
      <p className="text-white/80">{desc}</p>
    </Panel>
  );
}