import {useToast} from 'vue-toast-notification'
import {Notification} from "@/types/interfaces"

export const useNotification = (): Notification => {

    const $toast = useToast({position: 'top'})

    const success = (msg: string): void => {
        $toast.success(msg)
    }

    const error = (msg: string): void => {
        $toast.error(msg)
    }


    return {
        success,
        error
    }
}
