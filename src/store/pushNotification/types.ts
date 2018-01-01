import { Notifications } from 'expo'

export interface PushNotificationState {
    register: boolean
    data: Notifications.Notification[]
}
