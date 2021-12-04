export default function (state: any, action: any) {
    switch (action.type) {
        case 'renderInput':
            return action.payload
        case 'clearInputField':
            return ''
        default:
            return state
    }
}