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
            borderRadius: "1.5rem",
            backgroundColor: "#262626",
            boxSizing:"border-box"
        }}>
            <div style={{
                padding: "2rem",
                width: "50%",
                textAlign: "start"
            }}>
                <span style={{
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    backgroundColor: "#ffffff",
                    color: "black",
                    padding: "0.25rem 1rem",
                    borderRadius: "9999px",
                }}>{label}</span>
                <div style={{
                    color: "white"
                }}>
                    <h3 style={{
                        marginTop: "1.5rem",
                        marginBottom: "1rem",
                        fontSize: "3rem",
                        lineHeight: "1"
                    }}>{title}</h3>
                    <div style={{
                        width:"7rem",
                        backgroundColor:"white",
                        marginBottom: "1rem",
                        border:"1px white solid"
                    }}></div>
                    <p style={{
                        lineHeight:"1.625rem",
                        fontSize:"1rem"
                    }}>{desc}</p>
                </div>
            </div>
            <div style={{
                width: "50%",
                height: "auto"
            }}>
                <img src={img} alt="" style={{
                    width: "100%",
                    height: "100%"
                }} />
            </div>
        </div>
    )
}