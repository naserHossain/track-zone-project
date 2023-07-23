import { useState } from "react";
import "./App.css";
import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/UI/buttons/Button";
import { deepClone } from "../utils/object-utils";

const init = {
    title: {
        value: "",
        error: "",
        focus: false,
    },
    bio: {
        value: "",
        error: "",
        focus: false,
    },
    skills: {
        title: "",
        error: "",
        focus: false,
    },
};

const App = () => {
    const [state, setState] = useState({ ...init });

    const mapStatesToValues = (state) => {
        return Object.keys(state).reduce((acc, cur) => {
            acc[cur] = state[cur].value;
            return acc;
        }, {});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const oldState = deepClone(state);
        oldState[name].value = value;
        setState(oldState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const values = mapStatesToValues(state);

        const { isValid, errors } = checkValidity(values);
        if (isValid) {
            console.log(state);
        } else {
            console.log(errors);
        }
    };

    const handleFocus = (e) => {
        const { name } = e.target;
        const oldState = deepClone(state);
        oldState[name].focus = true;
        setState(oldState);
    };

    const handleBlur = (e) => {
        const key = e.target.name;
        const values = mapStatesToValues(state);
        const { errors } = checkValidity(values);
        const oldState = deepClone(state);

        if (oldState[key].focus && errors[key]) {
            oldState[key].error = errors[key];
        } else {
            oldState[key].error = "";
        }

        setState(oldState);
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
                        value={state.title.value}
                        label={"Title"}
                        name={"title"}
                        placeholder={"Enter your title"}
                        onChange={handleChange}
                        error={state.title.error}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <InputGroup
                        value={state.bio.value}
                        label={"Bio"}
                        name={"bio"}
                        placeholder={"Enter your bio"}
                        onChange={handleChange}
                        error={state.bio.error}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <InputGroup
                        value={state.skills.value}
                        label={"Skills"}
                        name={"skills"}
                        placeholder={"Enter your skills"}
                        onChange={handleChange}
                        error={state.skills.error}
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
