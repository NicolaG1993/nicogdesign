import { useEffect } from "react";
import styles from "@/styles/Home.module.css";

export default function TypeWriter() {
    const aText = new Array(
        `Hi,`,
        ` I'm Nick. `,
        `Web Developer. `,
        `Graphic Designer.`
    ); // array of strings
    const iSpeed = 100; // time delay of print out
    let iIndex = 0; // which string are we currently printing
    let iArrLength = aText[0].length; // the length of the string we are printing
    const iScrollAt = 20; // start scrolling up at this many lines

    let iTextPos = 0; // current string index
    let sContents = ""; // string already printed (not letters!)
    let iRow; // é come iIndex ma aumenta dopo la prima lettera (forse serve x contare righe in qualche modo strano)

    const writer = () => {
        sContents = " ";

        iRow = Math.max(0, iIndex - iScrollAt);
        const destination = document.getElementById("typewriter"); //document exist only after component mount

        while (iRow < iIndex) {
            iRow + 1 === 2
                ? (sContents += aText[iRow++] + "<br />")
                : (sContents += aText[iRow++]);
        } //line break dopo seconda array

        if (aText[iIndex]) {
            destination.innerHTML =
                sContents +
                aText[iIndex].substring(0, iTextPos) +
                "<span></span>";
        }

        if (iTextPos++ == iArrLength) {
            iTextPos = 0;
            iIndex++;
            if (iIndex != aText.length) {
                if (!aText[iIndex]) {
                    return; // end
                } else {
                    iArrLength = aText[iIndex].length;
                    setTimeout(() => writer(), 700);
                }
            }
        } else {
            setTimeout(() => writer(), iSpeed);
        }
    };
    //potrei mettere {typewriter} in DOM, alla fine renderizza quello che ritorna
    //inoltre devo sistemare il <br/>, deve essere solo dopo II array

    useEffect(() => {
        // setScrollTop(window.scrollY);
        // window.addEventListener("scroll", setScrollTop(window.scrollY));
        // const destination = document.getElementById("typewriter");
        // destination.innerHTML = "<span></span>";

        setTimeout(() => writer(), 1700);
    }, []);

    return (
        <div>
            <h1 id="typewriter" className={styles["typewriter"]}>
                <span></span>ㅤ
            </h1>
        </div>
    );
}
