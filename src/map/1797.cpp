class AuthenticationManager
{
public:
  AuthenticationManager(int timeToLive)
  {
    timeout = timeToLive;
  }

  void generate(string tokenId, int currentTime)
  {
    //    tokenOutMap.emplace(tokenId, currentTime + timeout);
    tokenOutMap[tokenId] = currentTime + timeout;
  }

  void renew(string tokenId, int currentTime)
  {
    auto it = tokenOutMap.find(tokenId);
    if (it == tokenOutMap.end())
    {
      // 若token不存在
      return;
    }
    if (currentTime >= it->second)
    {
      // 若时间已过期，则将其清除
      tokenOutMap.erase(tokenId);
      return;
    }
    // 更新过期时间
    //    it->second = currentTime + timeout;
    tokenOutMap[tokenId] = currentTime + timeout;
  }

  int countUnexpiredTokens(int currentTime)
  {
    int count = 0;

    for (auto &[_, out] : tokenOutMap)
    {
      if (out > currentTime)
      {
        count++;
      }
    }
    return count;
  }

private:
  unordered_map<string, int> tokenOutMap; // key为token的id，值为过期时间
  int timeout;
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * AuthenticationManager* obj = new AuthenticationManager(timeToLive);
 * obj->generate(tokenId,currentTime);
 * obj->renew(tokenId,currentTime);
 * int param_3 = obj->countUnexpiredTokens(currentTime);
 */