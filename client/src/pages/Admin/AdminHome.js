import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          As the administrator of a blood bank, I oversee a facility that plays a vital role in the healthcare system by ensuring the availability of safe and sufficient blood and blood components for medical use. Our primary mission is to collect, store, process, and distribute blood to patients in need, whether due to surgery, trauma, anemia, cancer treatments, or other medical conditions.

          <br /><br />

Blood collection at our facility relies on voluntary donations from healthy individuals. Once donated, the blood undergoes rigorous testing for infectious diseases such as HIV, hepatitis B and C, syphilis, and other pathogens. This thorough testing is essential to ensure the safety of the blood supply and to prevent the transmission of diseases through transfusions.

<br />
Following testing, we separate the blood into its main components: red blood cells, plasma, platelets, and cryoprecipitate. Each component serves specific therapeutic purposes. Red blood cells are used to treat conditions like anemia, plasma helps patients with clotting disorders, and platelets are crucial for individuals with thrombocytopenia or those undergoing chemotherapy.


<br /> <br />
Proper storage of these components is critical to maintaining their viability and effectiveness. Red blood cells are refrigerated, plasma and cryoprecipitate are frozen, and platelets are kept at room temperature with constant agitation to prevent clumping.

Managing the blood supply involves meticulous inventory control to ensure that we can meet the demand from hospitals and clinics. This includes coordinating closely with healthcare providers to understand their needs and running effective donor recruitment campaigns to maintain an adequate supply. In emergencies, such as natural disasters or major accidents, our blood bank is prepared to mobilize resources quickly to address sudden surges in demand.


<br /><br />
Beyond our day-to-day operations, we are also committed to supporting medical research and advancements in transfusion medicine. Our blood bank contributes to clinical studies, helps develop new blood products, and improves transfusion protocols and safety measures.


<br /> <br />
In summary, as the administrator of this blood bank, I am dedicated to ensuring that our facility not only provides lifesaving blood products but also supports the broader healthcare infrastructure. Through a combination of medical expertise, efficient logistics, and active donor engagement, we strive to save lives and improve patient outcomes every day.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;