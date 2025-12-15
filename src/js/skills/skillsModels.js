// skill contructors

export const skillModel = (skill) =>
    `<li class="p-4 bg-white/5 rounded-lg shadow w-80 mr-5 content-center" id="${skill.name}">
        <img class="rounded-md" src="${skill.url}" alt="${skill.name}">
         <p class="text-white text-xl font-semibold uppercase">${skill.name}</p>
    </li>`
