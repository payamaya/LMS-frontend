import { ReactElement } from "react";
import { IUser } from "../utils/interfaces";

interface ITeacherDropdownProps {
	data: IUser[] | null;
}

export function TeacherDropdown({ data }: ITeacherDropdownProps): ReactElement {
	return (
		<select>
			{data?.map((teacher) => (
				<option key={teacher.id}>{teacher.name}</option>
			))}
		</select>
	);
}
