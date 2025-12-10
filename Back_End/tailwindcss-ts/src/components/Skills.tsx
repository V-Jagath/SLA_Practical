import html from '../assets/react.svg'
import css from '../assets/react.svg'
import bootstrap from '../assets/react.svg'

const Skills = () => {

    interface KnowSkills {
        img: any,
        skill: string,
        description: string,
    }

    const skill: KnowSkills[] = [
        { img: html, skill: "HTML5", description: "Semantic structure & clean markup" },
        { img: css, skill: "CSS3", description: "Responsive design & animation" },
        { img: bootstrap, skill: "Bootstrap 5", description: "UI components & grid system markup" }
    ]


    return (<>
        {skill.map((e, i) => (
            <div key={i} className='bg-gray-800 text-white flex flex-col gap-5 h-50 w-50'>
                <img src={e.img} alt="img" />
                <h1>{e.skill}</h1>
                <h3>{e.description}</h3>
            </div>
        ))}

    </>)
};

export default Skills;
