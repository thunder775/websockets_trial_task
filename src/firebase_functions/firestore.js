import {db} from "../services/firebase";

export function updateButton(buttonName, val) {
    return db.collection("buttons").doc(buttonName === "button-1" ? "hPfvxPfOIMAdOHJAOLsA" : "rpKf9q5jVsu4cOQRjKX5").update({
        value: val
    })
}

export default function resetButtons() {
    updateButton("button-1", true);
    updateButton("button-2", true);
}










