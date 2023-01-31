export const getObjecIdMapFromObjectsData = (objects) => {
  if (Object.keys(objects).length < 1) {
    console.log("no objects data supplied to map");
    return;
  }

  let map = new Map();

  objects.forEach((obj) => {
    if (map.has(obj.id)) {
      console.log("duplicate users present in users data");
      return;
    }

    map.set(obj.id, obj);
  });

  return Object.fromEntries(map);
};

export const getPostCommentsMapFromCommentsData = (comments) => {
  let map = new Map();

  comments.forEach((comment) => {
    if (!map.has(comment.postId)) {
      map.set(comment.postId, [comment]);
      return;
    } else {
      map.set(comment.postId, [...map.get(comment.postId), comment]);
    }
  });

  return Object.fromEntries(map);
};

export const trimText = (text, len) => {
  return text.length > len ? text.substr(0, len) + "..." : text;
};
