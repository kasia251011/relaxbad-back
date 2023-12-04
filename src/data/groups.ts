import GroupSchema, {Group} from "../model/Group"

export const initGroups = () => {
  GroupSchema.insertMany<Group>([
    {
      type: 'SINGLE',
      category: 'A',
      gender: 'MAN'
    },
    {
      type: 'MIX',
      category: 'B'
    },
    {
      type: 'DOUBLE',
      category: 'C',
      gender: 'WOMAN'
    },
    {
      type: 'MIX',
      category: 'D'
    },
    {
      type: 'SINGLE',
      category: 'E',
      gender: 'MAN'
    }
  ])
}

const date = new Date();

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const time = `${hours}:${minutes}:${seconds}`;