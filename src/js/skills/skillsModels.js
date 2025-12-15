// skill contructors

export const skillModel = (skill) =>
    `<li class="p-4 bg-white/5 rounded-lg shadow w-full h-full mr-5 content-center hover:bg-sky-800" id="${skill.name}">
        <img class="rounded-md" src="${skill.url}" alt="${skill.name}">
        <p class="text-white text-xl font-semibold uppercase bg-red">${skill.name}</p>
    </li>`
