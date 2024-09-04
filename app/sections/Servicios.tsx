import Container from "react-bootstrap/Container";
import ServiciosCard from "../components/ServiciosCard";

const ManageContent = [
  {
    id: 1,
    title: "Electricidad",
    imgUrl: "/Features/elec.png",
  },
  {
    id: 2,
    title: "Telecomunicaciones",
    imgUrl: "/Features/tele.png",
  },
  {
    id: 3,
    title: "Cloud",
    imgUrl: "/Features/cloud.png",
  },
];

const Servicios = () => {
  return (
    <Container className="text-center font-inter bg-white py-5 manage-container d-flex flex-column  ">
      <div data-aos="fade-down">
        <h1 className="servicios-tittle fs-1 lh-base text-gray-900 fw-bold">
          Servicios
        </h1>
        <p className="text-gray-200 fw-light fs-6 mt-4">
          Que podes encontrar de nosotros?
        </p>
      </div>
      <div className="">
        {ManageContent.map((card) => (
          <ServiciosCard key={card.id} {...card} />
        ))}
      </div>
    </Container>
  );
};

export default Servicios;
