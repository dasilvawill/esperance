import { MapIcon, PlusIcon, UsersIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const option = [
  {
    name: "Encontrar abrigo",
    description: "Buscar nos abrigos cadastrados",
    icon: MapIcon,
    href: "dashboard/shelterFind",
  },
  {
    name: "Incluir abrigo",
    description: "Incluir um novo abrigo",
    icon: PlusIcon,
    href: "dashboard/shelterInclude",
  },
  {
    name: "Encontrar abrigado",
    description: "Buscar nos abrigados cadastrados",
    icon: UsersIcon,
    href: "dashboard/shelteredFind",
  },
  {
    name: "Incluir abrigado",
    description: "Incluir um novo abrigado",
    icon: PlusIcon,
    href: "dashboard/shelteredInclude",
  },
];

export default function MenuOptions() {
  return (
    <div className="mx-auto mb-12 mt-20 grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
      <ul
        role="list"
        className="grid gap-x-12 gap-y-12 sm:grid-cols-2 sm:gap-y-12 xl:col-span-2"
      >
        {option.map((menuOption) => (
          <li key={menuOption.name}>
            <Link href={menuOption.href}>
              <div className="flex w-auto flex-row items-start justify-start gap-6 rounded-xl bg-gray-50 p-8 hover:bg-gray-100">
                {menuOption.icon && (
                  <menuOption.icon className="h-16 w-16" aria-hidden="true" />
                )}
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {menuOption.name}
                  </h3>
                  <p className="text-gray-400">{menuOption.description}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
