export type MenuItem = {
    MenuId: number
    MenuName: string
    Route: string
    ParentId: number | null
    Read: boolean
    Created: boolean
    Updated: boolean
    Deleted: boolean
}