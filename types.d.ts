export interface NASAImageData {
    date: string;
    explanation: string;
    hdurl?: string;
    media_type: 'image' | 'video';
    service_version: string;
    title: string;
    url: string;
    copyright?: string;
}

export interface DatePickerProps {
    onDateChange: (date: string) => void;
    selectedDate: string | null;
}

export interface DailyImageProps {
    imageData: NASAImageData | null;
    onDateChange: (date: string) => void;
    selectedDate: string | null;
    isLoading: boolean;
}

export interface StartScreenProps {
    onStart: () => void;
}
