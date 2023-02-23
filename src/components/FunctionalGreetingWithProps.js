import React from "react";

const FunctionalGreetingWithProps = (props) => {
    return (<section>
                <h1>Hello, Sam U Well!</h1>
                    <p>
                        {props.greeting} You crazy {props.age} year old eejit, living in {props.address} with your dog {props.dog} and wife {props.wife}
                    </p> 
            </section>);
}

export default FunctionalGreetingWithProps;