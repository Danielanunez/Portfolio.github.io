import { skillSection } from "../DOM/DOM.js";
import { skills } from "./skills.js";
import { skillModel } from "./skillsModels.js";

export const renderSkills = (skill) =>{
    const createCard = skills.map(skill => skillModel(skill)).join('');
    //.join('') une todo con un vacio entre los li, saca las comas

    const skillNode = document.createElement('ul');
    skillNode.className = "flex border-solid";
    skillNode.innerHTML = createCard;

    skillSection.append(skillNode);
}

export const creadCardSkill = () =>{
    renderSkills(skills);
}
