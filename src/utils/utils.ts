
export const formatNumberDisplay = (num: number): string => {
    if (num == 999){
        return 'VAR'
    }
    return num.toString()
}