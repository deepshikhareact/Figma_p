

import React from "react";

import image1 from "../assets/g1.jpg";
import image2 from "../assets/g3.jpg";
import image3 from "../assets/g2.jpg";
import image4 from "../assets/g4.jpg";
import image5 from "../assets/g5.jpg";

const images = [image1, image2, image3, image4, image5];

const Ten = () => {
return (
<div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
<div className="h-48 col-span-1 row-span-1 md:h-96">
<img
       src={images[0]}
       alt="img1"
       className="object-cover w-full h-full"
     />
</div>
<div className="h-40 col-span-1 md:col-span-1 md:row-span-2 sm:h-32 md:h-96">
<img
       src={images[1]}
       alt="img2"
       className="object-cover w-full h-full"
     />
</div>
<div className="col-span-1 row-span-1 h-96">
<img
       src={images[2]}
       alt="img3"
       className="object-cover w-full h-full"
     />
</div>
<div className="h-48 col-span-1 row-span-1 md:col-span-2">
<img
       src={images[3]}
       alt="img4"
       className="object-cover w-full h-full"
     />
</div>
<div className="h-48 col-span-1 row-span-1">
<img
       src={images[4]}
       alt="img5"
       className="object-cover w-full h-full"
     />
</div>
</div>
);
};

export default Ten;