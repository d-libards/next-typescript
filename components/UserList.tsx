import { fetchUsers } from '@/utils/action';

async function UserList() {
  const users = await fetchUsers();

  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <h4 key={user.id} className="capitalize text-lg">
                {user.firstName} {user.lastName}
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
