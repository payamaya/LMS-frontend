import { ChangeEvent, ReactElement } from "react";
import { IUser } from "../utils/interfaces";

interface ITeacherDropdownProps {
	data: IUser[] | null;
	handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function TeacherDropdown({ data, handleInputChange }: ITeacherDropdownProps): ReactElement {
	return (
		<select name='teacherId' onChange={handleInputChange}>
			<option value=""></option>
			{data?.map((teacher) => (
				<option key={teacher.id} value={teacher.id}>{teacher.name}</option>
			))}
		</select>
	);
}
