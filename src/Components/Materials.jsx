import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Materials() {
    const products = [
        {
            id: 1,
            image: "data:image/jpeg;base64,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",
            title: "River Sand (Type A)",
            rating: 4.6,
            price: "₹2,500 / ton",
            delivery: "3-5 days",
            distance: "150 km away",
        },
        {
            id: 2,
            image: "https://www.aggrekart.com/assets/TMT%20Steel-BpVawTzR.webp",
            title: "TMT Steel Bars (Fe 500D)",
            rating: 4.8,
            price: "₹62,000 / ton",
            delivery: "2-4 days",
            distance: "80 km away",
        },
        {
            id: 3,
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEBUQEBAQFRUWFhIYFxUYGBgaFRYWFRcZGBoZGhggHSoiGBolGxkbITIhJTUrLjAvFx8zODMtOigtLisBCgoKDQ0OFQ8QFSsdFx0rLSstKysrLS0rLTc3LS0tNy0rLS03NysrLSstKy0rKy0tLSstLTcrLS0rKysrKystK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcDAgj/xAA5EAACAQMDAgUDAgUDAgcAAAABAgADBBEFEiExQQYTIlFhMnGBFEIjM1KRoWKx8BbhBxVDcpLB0f/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAaEQEBAQEBAQEAAAAAAAAAAAAAARESAjEh/9oADAMBAAIRAxEAPwDuMREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBESP1HWKNvw7Ddz6cjPAzk+wjRITEpv8A11TIbPlpwdrM2ASPb+rHxI+h4tfafOuqOBub0gjKH6cE8n8CZ6i46EDE5roPjMXF1soK7Kud7H6QP9R7H2kgur13uPMa7ooikk0xu6D3z2x395OjF7iRGj62tyAQAFb6GByGHP8AbgZkvNSoREShERAREQEREBERAREQEREBERAREQEREBERARE1b7UKVAA1GxnoO5x1gbUSmah4/o06mxFU/wCpmwufbIBx95ujxna+WGyNxONueM/DYk6hix1agVSx6AEn7CUjU/F7kt5OAqnGTwCccAe8zrGut5LO9RtrjbsXbwG46+8qj6ra0nJVHqEbUVF9RDdTx0U+5mL61qRNaRe6qxq1Kj43U8UgSMKxP1MvwJVLrT9R8yo7HzFBJqMGBd1xyVRuvtz0knc+LTt2FVU9xyD+R1zNXS9Ua48you0+XxkrvGSOVxkYGP8AhkVH32n3tVWo0hb1qQAK02ZWqJ6ccZHBH+nE1aml0LcL+to1whCqp83HPswHT7DpLNoV5ds7sLSmx6b6RprlF+nA4yM/7TQ1ixZrik91TqtTUmp5TKFwyAncwyQ6ZxkA9u44kXFYu7ZLV82KVTTqdaOSxU4zuDd0+82bDULhFZ6lE8ft6kjpg/GP9paLm7WtUp1No8pW9TY9HThfkk/gSK8aVxX20qQpo9XBWoDgjaQWVhwGBHTvKmPfTvEd3Qdap/hhhkLxtKjjj7DH2l4o+PQoRqi5Wp0YAkAjggkdfvOQ3NJ2pU0bfWCvkouEIOCM9cjHt3zzJfQdUrqjJdVKo4ASmeoUZ5HH+YR2+w123rBStRfV056/aSJqAdSBnpz1nItGoXQrM9qbZkb9tQlTTOAM8DLZOTx+Z96veV7VKYr3NOqzVHBKggIT6lUZ5Ht/eXqpjrkSueF9aNdcO2OBjPc855/tLHNy6hERKEREBERAREQEREBERAREQE8K13TThnUH2yM/2nhrV41Cg9VVLFRwB7mcoq0Q7mpcXApFsnYh3Pz1zk8GZtxZHVK+t21Plqgx7gEgffibtCsrqHRgykZBByCPvOMWOjLcVCtO5Y0wBnP18nsemOJYDqP/AJfbeQGeoCzYy3Az24525knoxdfEV89KifL+puAf6fcznF9ryOPJcu7HjdzuXPfPye3SaN1qVSuqCpc00Jbd5e45CjsdvT3mvWrWo9VNavTpkKCffPWZt1cRd5olwaxQ1KapgFXOctuOMFBypz74Etmj2FqgNKktZnB/mvtOfcqvRft1kRonkXdWozUwVQIc72/mE+nvgYxmR+vWVxQqNcWbVD3K4PJ+G75gT9zrdN1bbSQbSyeoAMjKcEFT0z2M+NGZS5p2yJSBBO9gWdmGMnPUkk9PYSP0+wzRFxqFQLUqNvFNercDaG9+nXibNatbPtTdVDj6QjDah7nHc594FY1W1vlrVAypkv6cnLNjqR7LNprSpQooEcq7vzj6ST1JHwM/2knUvaIr7rnerou1H6KyNjJKn6jkTy1nw/dPsqVK6Oqkv5dPdnYRwc++O0jTWudQpWZprQepUJUBe2XPuew5zJK5V0dLp6rsaakNTPKbWHqKj+r/ALiVmvobfqFamXAplWenUKggEZGPf7Sb0So9WqzXFGvsGQDsPkke7N0gbl9qdtc25p0WGG2nKnkc5zx0mobWk9PZ0IOUb9wI/wCdJsahpVnbg1aW+mhIyq4KZPse32mjqFugtjc29ctwxKH6goODjHfjpAj9Pt7uvcvSp0sgHJqH+XngHDY9+g+8l7q7/TutteIoByVqK2c/A4GD8Tf8B3Fu9rsC5YjfUJOGO4nB57Y4BHEl9QtKBRaCdHJwTh8ED54H3lRC2d8iEsjE8DbzyTngfeaS+JhSq1Kda1UsXDfxOScjAYc/T9vmbdhodifOtnrotbezYI2naxyCPt/9TWGnJzb3YFUUW4cMdzlvUNr+2MZhFn0TU6F1xTyhQgnGdoxjkN+RxzLJb+LBQwlwrkdquBtce4I4/HWUPT28lVp0Sy0wzsFJyMnkknr8czZt6pZNq1TjezqhHow3RSP8xuDrltd06qCojgq3Qz3nJz4jKqgqKMZYbSACCvBwO0ntK8U1N38RkCYGNx556Y9+BNT2mL1EidJ1E1m+pWXBII7ciS01LqEREoREQEREBERASO1TWaFt/MdQfbPMkZXPF/h4XiBgxVky3ABLgc7CScYMlHle+JrapRIYsq1AQGztz7kd/wAzm2mPpyNWLs1XDlV359IwM4x9Ryep7TZ06mNRqvvaoi0dobIKk9QFUEcDjrN248I24VzQNRN53EE7qZbGM8+oZHE521v8aVPyLem9SjcEbwQEbGCR0GeuOfzK1d+dUdWC1GZx6dqnkDjgAcCS1loNtQUXWoOSEyadsr5++7H1E44HT3kxqHiuiLfzKRHKjaF/aMZ59iOkgouo65e01NsKJGFyT5PqOeuTt5Pz1nr4RvHurgiuuFRCzKVIyy4GMH9vOSPxOpWGnUwiVNoLFVLMWJJJA5HOB/iVPWtMp077zqtaqaZVwVQLvBwCQ79FBIAGAScyo2L2lTualFxVVRTcl6ZXIbjK8ADocfGBiaHiDU6TfwlapUfjkbRl/sJ50Htbk/p7ZHtnPqq19xqkUx9Wd3cjgfJ6TNpb21hUY7mqKwBFRlHngkkbcj0he+QM/ECP06yqUGa4vUFRcjy0c5TLd2x89FPcTX1fVEO2pSpBazMFxSBAYfCjoc4Ge8mNQ11iv8AoyqvqpuOfbcrEeoYxweZtaBb2xpi6ZrehUcHBAwVXuVXON5HfsDIrw0uyuaTmtdoC23ZSFQqwBb6ic5GccY+8+bvzqKs9CuoU+pkBHHHOw9V+3Sbuo0rOvttBWZzUbJI+oInqP2PbPzIzUNJL3lKrb0wtNcmqoIVcLjbx7npx1xC689WtLi5WiaIY1emCMbqRGc5P9PbP9WJ72us1KLeV57CmuQ29Qzrxgrz2+JPWWoPXuSpL0qduMscAE7+iHjocFuPYe8jvF2nvV3XNqKTbeSuCtUgDnknDH8CBAa9WurqiBRy1ElcnjeRnk8AZHf3m5plK2oVVJ2/pypDLjKs3Qbx3PXPvIClqFztHkrgO3FP9ykjk8fPafdLSWVGFYVxUf9rPtXJOc47++SYF68U67SFmwpUkqMFxTG1VKk8bhjkAdcCR/h2zr7FqXVxk4B2KMkEjuegMpdfw9XopuNZqrsMbVPpAPfdnmetnrl3autOvlsjJAHQdPn/EuMrBr2kXL6gK9O2NTbTTa/AHf6skYbGJK6O9C6J/UrUFXJXywdqrs9Pq5GWJ5/IkRqGtH0vhnTCcAker4A5M16a3FarmiPXWeqzK2F2Hg4B64+fiBYfG+lvTtS1n6XJVSM/tbuM5xnp+ZDaZqRpri5GxhgEHp8bT3EmbjT65t/KFQPuwBU5ABBUkEHnt2kXqnhq5rlaLPbsFBdAxcM57qMcoV4OTnOZFSr3D4YNR2gj6mwQyjjPycTTtiKjvTpIz08KG7he475yOvxmeWmUri1229zUyrlvQylkRBxhm4JcnpjpPXQdNGnVW31atTzCxp7Tils4znI3b/g8cCMEj4eNahU2irUTBHqRWKP7Bj7ToPhzVatRylT1HB9Q+kY+/Mp1bUhT2lKhzVbbknCoQCfpA64B+5kpo+pi3qrkVH3ZGR7nHaJ9K6BEwJmdmCIiAiIgIiICYmYgV/wAVaXUqU99vTDVQQcZC7x3BJ4z95S2Oq9P0FY4P7jT6j2O/n8Tqk0rrTlqZzUqrnrtbH+eo/EzYsrjn/Sr06j3F5Scq2WWgDhmJPKnPYew95B63oTXdZUsKNOggUmq2QETPdyMgt8Dmdru/B9nUpsjLUy2Mv5jmocf6iTxz0lPuKNhbq1oLcgBiGOTksONxOeSZmzFV1dfqUSaa1lcD07x9OFGDgduZpW7VLh81qbrQ2vU83P8ANIIVVX5JOAPg+82qnhm0YstKlcVHY5O5yFVSOOnB/PM3bG3rqVRKdutK3AVWck0+mNoYjO7Egr1mjebUp2tOtgujOTjFMAYCs7Y5zk46yQ1bwvf3CipRajxk7PMUs/wAOB+TPWpcMG8oICXcttpncpJ4yPbHzMX9GrbDc4GOhwclc+4+8Cp3VpeU3FFqFQVH4VMDLE9gQcH+8+rmzvbCgpvqFWn2BOGU4+VJ2n4OJa0t74bK1OiMIysNxALdQdoP7sH4nvU8YU8fp0VqlyxK+S4zjaCckHg4HPsOsCteHdM1BqpuUt6j5osoGAoXfggbmIB4m841KlVpp/Cph1xuLhgmOSrAfu9scHHWbWra/clkSpvFV8bVYjaB78cYlc8TmpbKjecXdm7jnjnP2hdXXTbZqVPyjWqlmdmZ9oGSePn0gcATGl6hTRqlK8qKGU4BC8j549wQcSL0fWjVXy3Xa21CCc+oN8dJ66kVp7XbaQSFLjHTtn29osJWy+mlnUO7U1XkeXsJYHoepIB69DMXNwtKv/ELVKbZFQ+UN6IF456Bc5z95GXOq0rhRSSqu4MMVACVT3yR047TT1HWbyiGtjTpMXBVXBB3dOQc9Oe8kW483tatndfp6RetTuB5lI4O8beCpA6Acc9Ok+rMUkrsbioVbIUbMEbOvLEcc+wldbU7mgmA9QlfSWPG0Zzj7Zx/idD0W9pVLVPRgbV3MykbmPU7sdSZazEbp9XS67uS1YKT6UBAUYP1A9VJ68SfqGgp87coYKVU85IbHG4/AE1dStbbYaNSmBx1AUMCe4PUGVaz0q4tHxVWoyZGyoxbDZ6c/tMirha3W1WQU6r5BYEBgMgf1EYJ+PiR1NqN6xR6ztVpglCqkbWPckEnH9us+tQvrm3CZyEOAXL7thPIXB6ZGefibWi3AXdVs6gphjh1ILbnHGS3UD7QIu3vrobjeU6hpVCq0+jtnb9G1SWJznB6ywV9CYUaaeXVQ/UF3klW5AznqDnHx37T2pUamVqUrbzKyZ3MlM7WbGCfbvx3ln8OUbmo6mpQqUwMMS3AyOwXPB/xLiIGx8FV7pPLuqdWiuVZWVqe4Fenc8S86FoQtf8A1XqEjGWAH+AJLgTM6SYmsTMRKhERAREQERMQMxEQEREBK/qvg2xuqnm1Eqbj1K1HUH8A4lgiBU6/gagtPZaO9BiclsmoW4wM7jmV66/8Pr8IFS7pVeWPrUqRnnjBxOmxiTIORW3h++0ta1arTWqX2hWQFiqjORtxnrzNmqabnLJTY8ZBHI78951PEiLrwxY1XNR7dCzclhkEn5weZL5XXL9b1CvRKVRU/hbwHX9wB6AAcFfnrPCjrNv5tZ3o44UCoVxlcZ278cjPadas/DtnROadBAftn/eSBt0xjYuPbAxJya/P3iD9PdNRC1UpsrZV85O3qwx36cCe+q6RZXbUaSNsqgfzM7jsxltw7/idwraNav8AVb0T90X/APJp1fCWmt1s7f8ACAH8EdJeTXHtW0VqVLclwtQUxwNpVjgcge/viQenXtUuoKb1JGQy5/wZ3208J2FI5S2TPbOTj+5kgdNoHnyqf/xEcmuSW2sPTPoCBB0RQAo+OnWe9zq1uATcpQYvt4ZV5x09QGeJ0C88GabWJZrWmCeSVyuT7naRmelj4Ws6ONlPp0BOQP7ycmufaNY6fWzUtrdWqk5Cthzkexbgf7zau/D2sVKyv5VPykDYXzPWSRwfxOl0bSknKU0X7ACe8vJrl9Hwbfl/PZKO4KAEZs5b+rPYj3Mk7XwjXrDZdLhNwbAqZOVPGTj1S+zEZDVRp+DQzba/k1KX9BU5IHIz2yD3EkLfwZplM5SzoL/7VwD9wODJ+JcR8UaKooVQAB0A6CfWJmJQiIgIiICIiAiIgYiMxATMxmIGYiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIHxmIEQMzMxGYGZmfOYzA+onzMwMxEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED4mIiAiYiEZmcxEKzERCMzMRCkREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/2Q==",
            title: "Crushed Stone Aggregate (20mm)",
            rating: 4.2,
            price: "₹7,500 / ton",
            delivery: "4-6 days",
            distance: "220 km away",
        },
        {
            id: 4,
            image: "https://www.aggrekart.com/assets/Cement-sniN0oa1.jpg",
            title: "OPC Cement (Grade 43)",
            rating: 4.5,
            price: "₹4,500 / ton",
            delivery: "1-3 days",
            distance: "50 km away",
        },
    ];

    const renderStars = (rating) => {
        const stars = [];
        const rounded = Math.round(rating * 2) / 2; // rounds to nearest 0.5

        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rounded)) {
                stars.push(<FaStar key={i} className="text-yellow-500" />);
            } else if (i - 0.5 === rounded) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-500" />);
            }
        }

        return stars;
    };


    return (
        <div className="py-10 mt-3">
            <h1 className="text-3xl md:text-4xl font-bold text-center p-6">
                Featured Materials Near You
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="rounded-2xl shadow-md hover:shadow-xl transition bg-white overflow-hidden"
                    >
                        <img
                            className="w-full h-52 object-cover"
                            src={product.image}
                            alt={product.title}
                        />

                        <div className="p-4 mb-5">
                            <div className="flex justify-between">
                                <h2 className="text-lg font-semibold">{product.title}</h2>
                                <div className="flex items-center gap-1 mt-1">
                                    {renderStars(product.rating)}
                                    <span className="text-sm text-gray-600 ml-1">
                                        {product.rating.toFixed(1)}
                                    </span>
                                </div>

                            </div>
                            <p className="text-gray-800 font-bold mt-1">{product.price}</p>
                        </div>

                        <div className="flex justify-between text-sm text-gray-600 px-4 pb-3">
                            <p className="flex items-center gap-1">
                                <FaTruck /> {product.delivery}
                            </p>
                            <p className="flex items-center gap-1">
                                <FaLocationDot /> {product.distance}
                            </p>
                        </div>

                        <div className="px-4 pb-4">
                            <div className="flex gap-2">
                                <button className="flex-1 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium">
                                    Buy Now
                                </button>
                                <button className="flex-1 py-2 rounded-lg border hover:bg-gray-50 font-medium">
                                    Add to Cart
                                </button>
                            </div>
                            <button className="w-full mt-2 py-2 rounded-lg border hover:bg-gray-50 font-medium">
                                Know More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}