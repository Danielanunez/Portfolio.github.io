// skill contructors

export const skillModel = (skill) => 
    `<li class="group relative w-full" id="${skill.name}">
        <img alt="${skill.name}" src="${skill.url}"
            class="absolute inset-0 object-cover opacity-75 transition-opacity group-hover:opacity-50" />

        <div class="relative p-4 sm:p-6 lg:p-8">
            <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                ${skill.name}
            </p>
            <div class="mt-32 sm:mt-48 lg:mt-64">
                <div
                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p class="text-sm text-white">
                        
                    </p>
                </div>
            </div>
        </div>
    </li>`