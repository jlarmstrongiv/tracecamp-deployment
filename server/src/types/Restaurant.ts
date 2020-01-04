import {prismaObjectType, prismaExtendType} from 'nexus-prisma'
import { intArg } from 'nexus'
import { prisma } from '../../generated/prisma-client'

const Restaurant = prismaObjectType({
    name: 'Restaurant',
    definition(t) {
        t.prismaFields({filter: ['createdAt', 'updatedAt']})
        t.field('welcome', {
            type: 'String',
            resolve({name}) {
                return `Welcome to ${name}!`
            }
        })
        t.field('menuItemsCount', {
            type: 'Int',
            resolve({id}, args, ctx) {
                return ctx.prisma.menuItemsConnection({
                    where: {
                        restaurant: {
                            id: "ck4uc77y4neru0b098uwoaorb"
                        }
                    }
                }).aggregate().count()
            }
        })
    }
})

export default Restaurant