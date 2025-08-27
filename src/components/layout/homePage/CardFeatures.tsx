interface PropsCardFeatures {
    img: string;
    title: string;
    desc: string;
    mode: "desktop" | "mobile";
    index: number;
    label: string;
}

export default function CardFeatures({ img, title, desc, label, mode, index }: PropsCardFeatures) {
    return (
        <div style={{
            display: "flex",
            marginBottom: "2rem",
            border: "1px #e5e7eb solid",
            borderRadius:"1.5rem",
            backgroundColor:"#262626"
        }}>
            <div style={{
                padding: "2rem",
                color: "white",
                width:"50%"
            }}>
                <span>{label}</span>
                <div>
                    <h3>{title}</h3>
                    <div></div>
                    <p>{desc}</p>
                </div>
            </div>
            <div style={{
                width:"50%",
                height:"auto"
            }}>
                <img src={img} alt="" style={{
                    width:"100%",
                    height:"100%"
                }}/>
            </div>
        </div>
    )
}