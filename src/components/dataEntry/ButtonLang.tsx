import { FlagOutlined, GlobalOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { useState } from "react";

const OPTIONS = [
    { value: "RU", label: <span><FlagOutlined style={{ marginRight: 6 }} /> RU</span> },
    { value: "EN", label: <span><GlobalOutlined style={{ marginRight: 6 }} /> EN</span> },
  ];


export default function ButtonLang() {
    const [selectedItems, setSelectedItems] = useState<string[]>(["RU"]);

    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o.value));

    return (
        <Select
            // mode="multiple"
            placeholder="RU"
            value={selectedItems}
            onChange={setSelectedItems}
            style={{
                color: 'white',
                background: 'none',
            }}
            options={filteredOptions}
        />
    )
}