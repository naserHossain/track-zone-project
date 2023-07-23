import { useState } from "react";
import "./App.css";
import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/UI/buttons/Button";

const init = {
    title: "",
    bio: "",
    skills: "",
};

const App = () => {
    const [values, setValues] = useState({ ...init });
    const [errors, setErrors] = useState({ ...init });
    const [focuses, setFocuses] = useState({
        title: false,
        bio: false,
        skills: false,
    });

    const handleChange = (e) => {
        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

        const key = e.target.name;
        const { errors } = checkValidity(values);
        if (!errors[key]) {
            setErrors((prev) => ({
                ...prev,
                [key]: "",
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Object.keys(state);

        const { isValid, errors } = checkValidity(values);
        if (isValid) {
            console.log(values);
            setErrors({ ...errors });
        } else {
            setErrors({ ...errors });
        }
    };

    const handleFocus = (e) => {
        setFocuses((prev) => ({
            ...prev,
            [e.target.name]: true,
        }));
    };

    const handleBlur = (e) => {
        const key = e.target.name;
        const { errors } = checkValidity(values);
        if (errors[key] && focuses[key] === true) {
            setErrors((prev) => ({
                ...prev,
                [key]: errors[key],
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                [key]: errors[""],
            }));
        }
    };

    const checkValidity = (values) => {
        const errors = {};
        const { title, bio, skills } = values;
        if (!title) {
            errors.title = "no title available";
        }
        if (!bio) {
            errors.bio = "bio is not available";
        }
        if (!skills) {
            errors.skills = "no skills available";
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0,
        };
    };

    return (
        <div className="root">
            <form onSubmit={handleSubmit}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    <InputGroup
                        value={values.title}
                        label={"Title"}
                        name={"title"}
                        placeholder={"Enter your title"}
                        onChange={handleChange}
                        error={errors.title}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <InputGroup
                        value={values.bio}
                        label={"Bio"}
                        name={"bio"}
                        placeholder={"Enter your bio"}
                        onChange={handleChange}
                        error={errors.bio}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <InputGroup
                        value={values.skills}
                        label={"Skills"}
                        name={"skills"}
                        placeholder={"Enter your skills"}
                        onChange={handleChange}
                        error={errors.skills}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default App;
