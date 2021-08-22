import * as React from "react";
import TextUnit from "./TextUnit";
import PropTypes, { InferProps } from "prop-types";
import { Mail, Book, Phone, Award, Percent } from "react-feather";

export default function RequestUnit({
  student,
  school,
}: InferProps<typeof RequestUnit.propTypes>) {
  return (
    <div className="flex flex-col w-full p-4 rounded-lg transition duration-200 ease-in-out bg-dark-500 hover:bg-dark-300 hover:shadow-lg">
      <section className="flex space-x-2 items-center">
        <section className="flex flex-col gap-1">
          <a href={`mailto:${student.email}`} target="_top">
            <h3 className="cursor-pointer hover:text-accent-hover">
              {student.name}
            </h3>
          </a>
          <TextUnit
            icon={<Award />}
            text={`Class / Degree : ${student.class}`}
            color="indigo-500"
          />
          <TextUnit
            icon={<Percent />}
            text={`Percentage : ${student.percentage}%`}
            color="green-500"
          />
          <TextUnit
            icon={<Phone />}
            text={`Student P. Number : ${student.phoneNum}`}
            color="green-500"
          />
          <TextUnit
            icon={<Mail />}
            text={`${student.email}`}
            color="blue-500"
          />
          <TextUnit
            icon={<Book />}
            text={`Institute : ${school.name}`}
            color="pink-500"
          />
          <TextUnit
            icon={<Phone />}
            text={`Institute P. Number : ${school.phoneNum}`}
            color="green-500"
          />
          <TextUnit icon={<Mail />} text={`${school.email}`} color="blue-500" />
        </section>
      </section>
    </div>
  );
}

RequestUnit.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNum: PropTypes.string.isRequired,
  }).isRequired,
  school: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNum: PropTypes.string.isRequired,
  }).isRequired,
};

RequestUnit.defaultProps = {
  student: {
    name: "D Joshua Daniel",
    class: "8",
    percentage: "98",
    email: "joshua@gmail.com",
    phoneNum: "6000000000",
  },
  school: {
    name: "Delhi Public School",
    email: "info@dpscoimbatore.com",
    phoneNum: "6000000000",
  },
};
