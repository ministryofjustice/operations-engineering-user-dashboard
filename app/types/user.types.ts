export interface User {
    id: number;
    name: string;
    email: string;
    docker: Boolean;
    github_username: String;
    slack_username: String;
}

export interface UserApiResponse {
    users: User[];
}
