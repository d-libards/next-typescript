import { fetchUsers } from '@/utils/action';
import DeleteButton from './DeleteButton';

async function UserList() {
  const users = await fetchUsers();

  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <h4
                key={user.id}
                className="capitalize text-lg flex justify-between mb-2"
              >
                {user.firstName} {user.lastName}
                <DeleteButton id={user.id} />
              </h4>
            );
          })}
        </div>
      ) : (
        <p>No user found...</p>
      )}
    </div>
  );
}
export default UserList;
