export default interface JSON {
	data: {
        discord_status: string
        discord_user: {
            avatar: string,
            display_name: string,
            global_name: string,
            id: string,
            username: string
        }
        listening_to_spotify: boolean,
        spotify: {
            album: string,
            album_art_url: string,
            artist: string,
            song: string,
            timestamps: {
                end: number,
                start: number
            },
            track_id: string
        } | null
    }
}
