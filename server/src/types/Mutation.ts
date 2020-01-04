import {prismaObjectType} from 'nexus-prisma'

const Mutation = prismaObjectType({
    name: 'Mutation',
    definition(t) {
        t.prismaFields(['deleteRestaurant'])
    }
})

export default Mutation
